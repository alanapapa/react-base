# netlify-deploy

<https://weather-alnp.netlify.app/>

---

> auto deploy from git

---

redirects:

- /public/_redirects:

    /*  /index.html 200

---

for testing before deploy:

- settings > Build & Deploy > Continuous Deployment > Build Command:

    yarn test && yarn build


---

.env

- settings > Build & Deploy > Environment

envname: ```REACT_APP_...```

> You CAN use environment variables in your create-react-app on Netlify, but all the build constraints of the Create React App will still apply.
>
> - By default you will have NODE_ENV defined for you
> - Any other environment variables starting with REACT_APP_ will be available
> - Any other variables except NODE_ENV will be ignored
> - Changing any environment variables will require you to trigger a new build/deploy
>
> IMPORTANT NOTE: No environment variables can be accessed from a create-react-app dynamically from the browser hosted on Netlify! They must be accessed at build time to be used in the static site.