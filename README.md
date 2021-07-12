# Imperial Vs Metric Conversion

The Imperial verus Metric app is a simple way to convert different, common, measurements between the Imperial and Metric systems. See the app [here](https://kovacsikdev.github.io/conversions/).

## Features

#### Easily convert between

- Fahrenheit and Celsius
- Pounds and Kilograms
- Miles and Kilometers
- Feet and Meters
- Inches and Millimeters

#### PWA

This is a PWA app. This means that viewing the app on your mobile device, you can add the app to your homescreen so that it can behave as a native app. The app will appear on your device like any other app that you install from Google Play or the App Store. The app is designed to work offline, so you can still use the app even if you are in aireplane mode or do not have any WiFi / data available.

## Run locally

To run the app locally, you will need Node, npm, and yarn installed globally on your machine

#### Clone the repo

```sh
git clone git@github.com:kovacsikdev/conversions.git
```

#### Install dependencies

```sh
yarn install
```

#### Start the app

```sh
yarn start
```

## Testing

The tests in this app are written in Jest and have full 100% code coverage on all the components and custom libraries

#### To run the tests

```sh
yarn test
```

## CI

This project uses Github Actions as the continuous integration / development process. Whenever new changes are made and pushed to the main branch, a Github Action is automatically kicked off. This is to run the unit tests, to make sure nothing broke, and to automatically push the changes to the Github Pages branch

You can see the steps being made in the yml file [here](https://github.com/kovacsikdev/conversions/blob/main/.github/workflows/main.yml)
