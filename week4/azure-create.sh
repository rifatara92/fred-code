#!/bin/bash

## step 2 - create user only if not exists

result=$(az ad user list --query [].principalName | grep -E /$usernamesomething/)

if [ -n result ]; then
  # create user
fi
