#! /bin/bash

## Add any post-create commands here 
## Ex: any npm dependencies we want image-wide
npm install -D @playwright/test@latest
npx playwright install