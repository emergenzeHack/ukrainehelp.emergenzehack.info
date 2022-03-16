#! /bin/bash

destdir="${1}"
number="${2}"
title="${3}"
labels="${4}"
url="${5}"
data="${6}"


destfile="${destdir}${number}.md"

echo "---" > "${destfile}"
echo "layout: issue" >> "${destfile}"
echo "number: ${number}" >> "${destfile}"
echo "title: ${title}" >> "${destfile}"
yq -P '{"issue":{"data": .}}' <<< ${data} >> ${destfile}
echo "  labels: ${labels}" >> "${destfile}"
echo "---" >> "${destfile}"
