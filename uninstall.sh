#!/bin/sh
original=/Applications/Musicality.app/Contents/Resources/MCGroovesharkService.js
backup=/Applications/Musicality.app/Contents/Resources/MCGroovesharkService.js.bak

if [ -f $backup ]
then
    echo 'Restoring original file from backup...'
    cp $backup $original
    echo 'Removing backup...'
    rm $backup
    echo 'Done.'
else
    echo 'No installation found.'
fi