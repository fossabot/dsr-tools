# The first time you do scripting,
# you will need to set the appropriate security settings
# Run PowerShell as administrator and type:
# set-executionpolicy remotesigned

Write-Host Ready to generate...
Pause
Remove-Item public, resources -Force -Recurse
hugo

Write-Host Ready to fetching dsrca.github.io...
Pause
Set-Location ..\dsrca.github.io
git pull origin
Get-ChildItem -Exclude .git, .gitattributes, .gitignore, CNAME, LICENSE | Remove-Item -Recurse -Force
Get-ChildItem ..\dsrca-source\public | Copy-Item -Force -Recurse

Write-Host Ready to add, commit and push...
Pause
git add .
$nowTime = Get-Date -Format "yyyy-MM-dd HH:mm:ss K"
git commit -m $nowTime
git push origin

Write-Host Finished...
Pause