#!/usr/bin/env bash
PROJECT_DIR=$1
FILE_PATH=$2

"$PROJECT_DIR"/app/console frontend:data --imigize-ru=1 > $FILE_PATH