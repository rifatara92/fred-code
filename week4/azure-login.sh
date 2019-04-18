#!/bin/bash

username=$1
passcode=$2
userdisplayname=$3
userprincipalname=$userdisplayname@$domain
DOMAIN=revaturexyz.onmicrosoft.com
random=${time}
usersubcription=$4

## step 1 - create user
az login -u $username -p $passcode

az ad user create --display $userdisplayname --principal $userprincipalname --force-login --pass $random --sub $usersubcription
