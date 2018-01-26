* Getting started
    * `cd appstart` enter this folder
    * `npm install` pull your dependencies
    * `npm start` starts your app and watchs for any file changes, you can then scan qr code in the mobile expo app to view
* Git commands, if using terminal & not github desktop app, these are basically what the github desktop app does behind the scenes on your clicks
    * `git checkout -b branchname` create a new branch
    * `git checkout master` go to the master branch
    * `git add -A` add/stage all files to track
    * `git commit -am "new commit \ndescription about commit"` save/commit your changes to your branch w/ the commit title and description, description is separated by a new line e.g. \n
    * `git pull origin master` get the code from the origin remote repo and its master branch
    * `git push origin master` send your changes to the origin remote repo and its master branch
    * `git merge --no-ff development` take changes from development branch into your current branch
    * `git branch` list branches
    * `git stash` take your staged files before a commit and add to a stack (like a stack of plates) useful for undos and also for moving changes to another branch
    * `git stash pop` takes the top of the stack of plates into your current repository (doesn't commit them)