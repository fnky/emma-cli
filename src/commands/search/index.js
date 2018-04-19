import { h, render, Component } from 'ink'
import { SearchBar } from '../../components/SearchBar'
import { Sections } from '../../components/Sections'
import { PackageSearch } from '../../components/PackageSearch'
import { PackageSuggestions } from '../../components/PackageSuggestions'

class EmmaSearch extends Component {
  state = {
    query: '',
    packages: [],
  }

  handleQueryChange = query => {
    this.setState({ query })
  }

  handleTogglePackage = pkg => {}

  handleInstall = () => {}

  render() {
    const { query, packages } = this.state

    return (
      <div>
        <SearchBar
          value={query}
          onChange={this.handleQueryChange}
          onSubmit={this.handleInstall}
          focus={true}
        />
        <Sections>
          {[
            {
              name: 'Search',
              component: (
                <SearchBar
                  value={query}
                  onChange={this.handleQueryChange}
                  onSubmit={this.handleInstall}
                />
              ),
            },
            {
              name: 'Package search',
              component: (
                <PackageSearch
                  query={query}
                  onSelect={this.handleTogglePackage}
                  selected={packages}
                  focus={true}
                />
              ),
            },
            {
              name: 'Our suggestions',
              component: <PackageSuggestions />,
            },
          ]}
        </Sections>
      </div>
    )
  }
}

// Setup

export const options = {
  description: `Search and install packages and playlists.`,
  help: `
      Usage
      $ emma search
      Examples
      $ emma search
      Options
      - no options, really simple!  
   `,
  flags: {
    verbose: {
      type: 'boolean',
      alias: 'v',
      default: false,
    },
  },
}

export async function run(flags) {
  let unmount

  const onError = () => {
    unmount()
    process.exit(1)
  }

  const onExit = () => {
    unmount()
    process.exit()
  }

  const { verbose } = flags

  unmount = render(h(EmmaSearch, { verbose, onError, onExit }))
}