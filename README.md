This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Setting up the codebase

- This codebase requires node v18, so set that up first.
- Next set up `yarn`.
- Then follow all the steps outlined in the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.<br>
- Then clone this repo.
    
<br>

## Starting the app
- Navigate into the project directory: `cd rn_investest`
- Then start the metro server by running: `yarn start`
- After metro is done starting, you can start the Android app by pressing <kbd>a</kbd> or the iOS app by pressing <kbd>i</kbd>. Alternatively you can open a separate terminal and run either `yarn android` or `yarn iOS`.

<br>

## How the app is organized
`./src` - all of the app code lives here

`./src/app-root.tsx` -> serves as the root of the app

`./src/app/` -> houses all app-wide concerns such as the store, styles, environmentvariables etc.

`./src/features` -> this is where you will find the redux slices and related hooksthat control key features in the app.

`./src/modules` -> access to the native modules created for this app

`./src/navigation` -> houses navigation and associated the screens. Subdirectories arenamed after navigation domains. Since this is a basic app, we have only one domaincalled 'onboarding'. All 3 pages live under this domain. Each domain's directory has thescreen components inside.

`./src/services` -> this is where we'd normally find services used often in the app.It currently has a dummy service in there called logger. That doesn't do much.

`./src/shared` -> this directory has basic UI that are reused in the app

`./src/widgets` -> this directory has more complex components. These may interact with other UI and can interact with the app state.

<br>

## How I addressed each requirement of the exercise:
    
`R1. Three views that navigate between each other.`
    
    - Used `react navigation`'s `drawerNavigator`.
    - You can navigate to any screen using left side drawer.
    - The second screen has buttons that also navigate to the other screens.

<br>

`R2. A view that allows you to capture data and keeps this in state`
    
    - The first screen has the input field.
    - Used redux toolkit to store this data.
    - The data is then displayed in a text pill at the top right of the second screen
    
<br>

`R3. A view must contain 4 button variations. One of them must slide`
    
    - The third screen has all 4 button variations

<br>

`R4. A native module that checks if the app is running in a simulator`

    - This is done for both Android and iOS using a module aptly named `SimulatorCheckModule`.
    - Uses promises to communicate from native to JS.
    - As a bonus, I set up env variables to toggle between an app build that doesn't care if 
    running a simulator vs an app build that won't allow a simulator. The env files are 
    named `.env` and `.env.nosim` respectively. To build a no-simulators-allowed app for 
    Android, run `yarn start:nosim` followed by `yarn android:nosim`. Same goes for iOS.
    These convenience scripts are listed in `package.json`.
    - When running the nosim version, a modal displays a notice saying no simulators
    are allowed. This modal sits on a view that is rendered in place of the regular navigator.
    This means the user can't access the rest of the app anyway.

`R5. Static type checking`

    - Using TypeScript

<br>

## Comments

- The `SimulatorCheckModule` manually looks for a specific strings in the build. They're unlikely to be exhaustive. One can probably still bypass it with the right configs in a simulator.
- No tests or anything of the sort because of the app size.