jq -cj  '.[] | select( .issue.labels | contains("Accettato")) | .number,.issue.title,.issue.labels,.issue.url,.issue.data | tojson+"\u0000"'  < _data/machgen/issuesjson.json   | xargs -0 -n5 -P4 scripts/createIssuePage.sh issues2/

