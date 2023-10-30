## Commit changes

### Committing new changes to git

Git is a powerful version control system that allows developers to track changes to their code. GitHub is a popular web-based hosting service for Git repositories. Here are some essential commands for committing new changes to git:
#### 1. git add {file name}

Adds a file to the staging area. This tells Git to include the file in the next commit. You can also use `git add .` to add all changes in the current directory.

#### 2. git commit -m "{commit message}"

Commits the changes to the local repository. The commit message should describe the changes you made. This helps other developers understand what changes were made.

#### 3. git push

Pushes the changes to the remote repository on GitHub. This makes the changes visible to others who have access to the repository.

#### 4. git status

Displays the status of the current repository. This shows you which files have been modified, which files are staged for commit, and which files are not tracked.

#### 5. git diff

Displays the differences between the current state of the repository and the last committed state. This helps you see what changes have been made.

#### 6. git log

Displays the commit history of the repository. This shows you who made changes, what changes were made, and when they were made.
[[Git Commit Convention]]
# Branches

## View all branches

```html
git branch
```

## Delete a branch

```html
git branch -d <branch-name>
```

## Switch between branch or create a new branch

```html
git checkout <branch-name>
git checkout -b <branch-name>  # Create a new branch
```

## Rename a branch.    

```html
git branch -m <old-branch-name> <new-branch-name>
```

## Merge updates to the Main/Master branch

To merge the changes from the "day_1" branch into the "main" branch, you can follow these steps:

1. Checkout the target branch: First, ensure you are on the branch you want to merge the changes into. In this case, switch to the "main" branch using the following command:
    
    ```
    git checkout main
    
    ```
    
2. Merge the branch: Once you are on the target branch ("main" in this case), run the following command to merge the changes from the "day_1" branch into the "main" branch:
    
    ```
    git merge day_1 -m '<message>'
    
    # If in Vim, type :wq to quit
    
    ```
    
    This command merges the changes from the "day_1" branch into the current branch ("main").
    
3. Resolve any conflicts: If there are any conflicts between the branches during the merge process, Git will notify you. You will need to resolve these conflicts manually by editing the affected files. Git will mark the conflict areas within the files with special markers (**`<<<<<<<`**, **`=======`**, and **`>>>>>>>`**). Edit the files to resolve the conflicts, then save the changes.
4. Commit the merge: After resolving any conflicts, you need to commit the merge by running the following command:
    
    ```
    
    git commit -m "Merge changes from day_1 branch"
    
    ```
    
    Provide an appropriate commit message that describes the merge.
    
5. Push the changes: Finally, push the merged changes to the remote repository using the command:
    
    ```
    git push origin main
    
    ```
    
    This command pushes the changes in the "main" branch, including the merged changes from "day_1", to the remote repository.
    

After completing these steps, the changes from the "day_1" branch will be merged into the "main" branch, and both branches will be in sync.

## Push changes to specific branch

- Make sure that you are on the right branch

git branch

git check out <branch-name>

```html
git push -u origin <branch-name>
```




## Reflect deleted branch changes to Github

If you have deleted a branch locally and want to reflect the changes on the GitHub website, you need to push the deletion to the remote repository. Here's what you can do:

1. Confirm the deletion: First, ensure that you have successfully deleted the branch locally. You can verify this by running the command **`git branch`** and confirming that the branch is not listed.
2. Push the deletion: To push the deletion of the branch to the remote repository on GitHub, use the following command:
    
    ```
    git push origin --delete <branch-name>
    ```
    
    Replace **`<branch-name>`** with the name of the branch you deleted locally. This command removes the specified branch from the remote repository.
    
    Alternatively, you can use the shorthand form of the command:
    
    ```
    git push origin :<branch-name>
    ```
    
    This syntax is equivalent to **`--delete`**.
    
3. Verify the deletion on GitHub: After pushing the deletion, visit the GitHub repository's page and navigate to the "Branches" tab. You should see that the deleted branch is no longer listed.

By following these steps, you can process the deletion of a branch locally and reflect the changes on the GitHub website. ==Note that once a branch is deleted, it cannot be easily recovered, so double-check before executing the deletion command.==

## Pull changes on my remote repo

[Getting changes from a remote repository - GitHub Docs](https://docs.github.com/en/get-started/using-git/getting-changes-from-a-remote-repository#fetching-changes-from-a-remote-repository)

## Clone a repo

```
$ git clone https://github.com/USERNAME/REPOSITORY.git
# Clones a repository to your computer
```

## Fetching changes from remote repository

Use `git fetch` to retrieve new work done by other people. Fetching from a repository grabs all the new remote-tracking branches and tags *without* merging those changes into your own branches.

If you already have a local repository with a remote URL set up for the desired project, you can grab all the new information by using `git fetch *remotename*` in the terminal:

```
$ git fetch REMOTE-NAME
# Fetches updates made to a remote repository
```

## [Merging changes into your local branch](https://docs.github.com/en/get-started/using-git/getting-changes-from-a-remote-repository#merging-changes-into-your-local-branch)

Merging combines your local changes with changes made by others.

Typically, you'd merge a remote-tracking branch (i.e., a branch fetched from a remote repository) with your local branch:

```
$ git merge REMOTE-NAME/BRANCH-NAME
# Merges updates made online with your local work
```

## [Pulling changes from a remote repository](https://docs.github.com/en/get-started/using-git/getting-changes-from-a-remote-repository#pulling-changes-from-a-remote-repository)

`git pull` is a convenient shortcut for completing both `git fetch` and `git merge` in the same command:

```
$ git pull REMOTE-NAME BRANCH-NAME
# Grabs online updates and merges them with your local work
```

Because `pull` performs a merge on the retrieved changes, you should ensure that ==your local work is committed== before running the `pull` command. If you run into [a merge conflict](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line) you cannot resolve, or if you decide to quit the merge, you can use `git merge --abort` to take the branch back to where it was in before you pulled.

## Merge branch to main branch
