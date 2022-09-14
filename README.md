# fullstackopen

### To create the repository:

1. Ensure you have Git installed
```
git --version
```
2. Create a new file for your GitHub documents.
3. Copy the filepath by going Edit > click "Alt" and select 'Copy "GitHub" as Filename'. 
4. open Terminal. Enter the following:
```
cd [paste FILEPATH to folder]
```
5. Add the origin to the filepath:
```
git remote add origin https://github.com/seth-mc/fullstackopen.git
```
6. Tell GitHub what you want to add
```
git add .    
```
7. Make the commit and enter your description:
```
git commit -m "enter description"
```


### After making changes to the repository:
1. open Terminal. Enter the following:
```
cd [FILEPATH to GitHub]
```

2. Then, either add the URL (Or set-URL if you get a "fatal: remote origin already exists" error)

```
git remote set-url origin https://github.com/seth-mc/fullstackopen.git

```

3. Update the files with your new code:


    To add all the changes you've made:
        ```
        git add .
        ```
    To add single folder:
        ```
        git add directory path
        ```
   To add multiple folders:
        ```
        git add folder1 folder2 folder3 folder4
        ```

```
git add .
git commit -m "enter description here"
git push origin main
```

### If you want to pull the latest changes to your existing folder:
1. open Terminal. Enter the following:
```
cd [paste FILEPATH to base-bot]
```
2. to a pull from the main branch:
```
git pull origin main
```