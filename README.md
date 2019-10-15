## Data Collaboratives

### Installation
    npm install
    bundle exec jekyll build

### Run server
    bundle exec jekyll serve

### Data
The Contentful API data is fetched and stored in `cases.yaml` file within the `_data` folder.

Contentful data is automatically updated with CircleCi, but it can also be pulled directly from Contentful:

    bundle exec jekyll contentful

### Deploy
To deploy simply merge your branch to master. Once merged, CircleCi will build and push the changes to `gh-pages` automatically if all tests pass.

#### Manual Deployment
    bundle exec jekyll build
    gulp push-gh-pages