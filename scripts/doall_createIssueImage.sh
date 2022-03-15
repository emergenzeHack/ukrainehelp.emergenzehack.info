jq -cj  '.[] | select( .issue.labels | contains("Accettato")) | .number,.issue.title,.issue.labels | tojson+"\u0000"'  < _data/machgen/issuesjson.json   | xargs -0 -n3 -P4 scripts/createIssueImage.sh img/templates/issue_templatew.png 900x490 "+80+50" images/issues/

