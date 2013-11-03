#!/bin/sh
original=/Applications/Musicality.app/Contents/Resources/MCGroovesharkService.js
backup=/Applications/Musicality.app/Contents/Resources/MCGroovesharkService.js.bak

if [ -f $backup ]
then
    echo 'Restoring original file from backup...'
    cp $backup $original
elif [ -f $original ]
then
    echo 'Backing up original file...'
    cp $original $backup
else
    echo 'File '$original' not found, aborting.'
    exit
fi

echo 'Patching...'
cat grooveshark_ad_dodge.js >> /Applications/Musicality.app/Contents/Resources/MCGroovesharkService.js
echo 'Done.'