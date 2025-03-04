# React + Vite

To add content to the website:

1. in your terminal, clone this repository using 
git clone https://github.com/mackenziesnyder/jclaulab.github.io.git

2. Make a new branch by running:
- git checkout main
- git checkout -b your-branch-name (for example, mackenzie-profile if I was adding to the profile page)

2. cd lab-webiste

3. Open up VSCode. If you are on the cbs server enter code .

4. Naviagte to the data folder and open the .json file of the page you want to add content to

5. Using the same formatting as within the rest of the .json file, add your content to the top of the sheet and save the file. A list of the content needed for each section is listed below. For the images, naviagte to the public folder, and add the image into the respective folders for the page.

News Page:

    {
        "title": "title",
        "link": "link to news", (optional)
        "date": "2025-01-01",
        "subheading": "short description of the news", (around a one sentence summary)
        "content": "long description of the news",
        "img": "/news-images/test-image.png" (replace 'test-image.png' with the name of your image)
    },

Paper Page: 

    {
        "title": "title",
        "link": "link to paper",
        "date": "2025-01-01",
        "authors": "Lau et al., 2024",
        "img": "/paper-images/ijcars.png" (image of the published jounal - optional)
    },

People Page: 

    {
        "active": true, (set active to false if an alumni)
        "name": "name",
        "position": "Undergraduate student, etc.",
        "department": "department",
        "supervisor": "co-supervised by...",
        "img": "/people-images/mackenzie.png",
        "socialLinks": { (any of the social links are optional, if you do not have an account delete it from this section)
            "linkedin": "link",
            "github": "link",
            "email": "mailto:your email",
            "orcid": "",
            "google_scholar": "",
            "twitterx": "",
        }
    }

Pushing your changes to git:
- once you are finished adding content, make sure you've saved all the files
- in the terminal, enter git status (this show all of the files you updated)
- add the files to your commit with git add <file names> (for example: git add people-page.jsx)
- commit the changes to your branch with git commit -m "enter a commit message here" (for example: git commit -m "added my profile")
- push the branch with the new changes to github with git push -u origin your-branch-name 

Creating a pull request:
- Navigate to https://github.com/mackenziesnyder/jclaulab.github.io
- go to the pull request tab and click "new pull request"
- ensure that both the head and base repository is set to mackenziesnyder/jclaulab.github.io
- on the right, select your branch
- on the left, select the 'main' branch 
- click 'create pull request'
- on the right hand side, there is a section called reviewers
- Add mackenzie as a reviewer, she will check over the branch before merging
- thats all!

To run in developer mode:

- cd lab-website
- nvm use --lts (node v22.14.0 (npm v10.9.2))
- npm install
- npm run dev