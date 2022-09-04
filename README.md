[![Deployment](https://github.com/dassencio/assencio-management-consulting/actions/workflows/deployment.yml/badge.svg)](https://github.com/dassencio/assencio-management-consulting/actions/workflows/deployment.yml)

# Description

This repository contains the code used to build ASSÊNCIO Management
Consulting's website.

# License

All files from this repository are licensed under the
[MIT license](https://github.com/dassencio/assencio-management-consulting/tree/master/LICENSE)
except for those belonging to the
[Open Sans font](https://github.com/googlefonts/opensans), which are licensed
under the [SIL Open Font license version 1.1](https://github.com/googlefonts/opensans/blob/main/OFL.txt).

# Development instructions

A dev container configuration defining a complete development environment is
available in this repository (see the
[`devcontainer.json`](https://github.com/dassencio/assencio-management-consulting/tree/master/.devcontainer/devcontainer.json)
file). If you use it, all you will need to do is start a development web server
with the following command:

    npm run dev

All npm packages needed to build the website are listed in the
[`package-lock.json`](https://github.com/dassencio/assencio-management-consulting/tree/main/package-lock.json)
file. In case you prefer setting up your own development environment, you will
need to install them with the following command:

    npm install

# Build instructions

To build the website, run the following commands:

    npm install
    npm run build

This will generate a static website inside the `./dist` directory. Its contents
can then be deployed directly to a production server.
