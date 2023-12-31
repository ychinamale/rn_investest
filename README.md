The Investest app is a RN CLI app built for a technical assessment. This README will:
- Guide you through the process of setting up the codebase
- Guide you on how to start the app
- Walk you through the project structure, and lastly
- Give you a TLDR of how I addressed each challenge in the exercise (complete with **screengrabs**)

<br>

## Setting up the codebase

- This codebase requires node v18, so set that up first.
- Next set up `yarn`.
- Then follow all the steps outlined in the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.<br>
- Then clone this repo.
    
<br>

## Starting the app
- Navigate into the project directory: `cd rn_investest`
- Then start the metro server by running: `yarn start`
- After metro is done starting, you can start the Android app by pressing <kbd>a</kbd> or the iOS app by pressing <kbd>i</kbd>. Alternatively you can open a separate terminal and run either `yarn android` or `yarn ios`.

<br>

## How the app is organized

My code organization is inspired by [Feature-sliced design architecture](https://feature-sliced.design/docs/get-started) and [Bulletproof react](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md).

<br>

`./src` - all of the app code lives here

`./src/app-root.tsx` -> serves as the root of the app

`./src/app/` -> houses all app-wide concerns such as the store, styles, environment variables etc.

`./src/features` -> this is where you will find the redux slices and related hooksthat control key features in the app.

`./src/modules` -> access to the native modules created for this app

`./src/navigation` -> houses navigation and associated the screens. Subdirectories arenamed after navigation domains. Since this is a basic app, we have only one domaincalled 'onboarding'. All 3 pages live under this domain. Each domain's directory has thescreen components inside.

`./src/services` -> this is where we'd normally find services used often in the app.It currently has a dummy service in there called logger. That doesn't do much.

`./src/shared` -> this directory has basic UI that are reused in the app

`./src/widgets` -> this directory has more complex components. These may interact with other UI and can interact with the app state.

<br>

## How I addressed each requirement of the exercise
    
`R1. Three views that navigate between each other.`
    
    - Used `react navigation`'s `drawerNavigator`.
    - You can navigate to any screen using left side drawer.
    - The second screen has buttons that also navigate to the other screens.


![R1 Can navigate between 3 views](https://github.com/ychinamale/rn_investest/assets/5281496/88b43ce2-721d-4899-8547-0562aee1f535)


<br>

---

`R2. A view that allows you to capture data and keeps this in state`
    
    - The first screen has the input field.
    - Used redux toolkit to store this data.
    - The data is then displayed in a text pill at the top right of the second screen


![R2 Capture data and show it](https://github.com/ychinamale/rn_investest/assets/5281496/9300e3d6-b968-4a38-9bd5-08d247940d19)


<br>

---

`R3. A view must contain 4 button variations. One of them must slide`
    
    - The third screen has all 4 button variations


![R3 A view with all the buttons](https://github.com/ychinamale/rn_investest/assets/5281496/3d1e3fe4-4491-457d-8244-e6c8db960936)


<br>

---

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


![R4 Simulator detection reduced](https://github.com/ychinamale/rn_investest/assets/5281496/68ebc504-0432-4141-82a2-3b4223fea110)


<br>

---

`R5. Static type checking`

    - Using TypeScript

<br>

😬 Sorry. No screengrab for the use of typescript 😬

## Limitations

- The `SimulatorCheckModule` manually looks for a specific strings in the build. They're unlikely to be exhaustive. One can probably still bypass it with the right configs in a simulator.
- No tests or anything of the sort
- Did not set up ESLint and Prettier
- Did not set up splash screens and app icons
- Could probably use more emojis in my commit messages 
