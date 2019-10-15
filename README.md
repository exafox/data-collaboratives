## Data Collaboratives

This is a static site using Jekyll, Contentful as a data API, and CircleCI for continuous integration.

### Installation
First make sure ruby, node, npm, and bundler are installed on your system, then:

    bundle install
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
If there is a problem with the continuous integration, manual deployment can be handled by:

    gulp deploy

#### Troubleshooting
##### Deployment

The gulp-gh-pages plugin stores a cache of the repo automatically in a `.publish` folder, which throws this error when you try to deploy after deleting your gh-pages branch.

```
Error in plugin 'gulp-gh-pages'
Message:
    Command failed: git pull
Your configuration specifies to merge with the ref 'refs/heads/gh-pages'
from the remote, but no such ref was fetched.

Details:
    killed: false
    code: 1
    signal: null
    cmd: git pull
```

To fix this, delete the `.publish` folder in the root of the directory and then run `gulp deploy` again.

See:
https://github.com/shinnn/gulp-gh-pages/issues/109