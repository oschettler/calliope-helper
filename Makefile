#
#
deploy:
	zip -r -X calliopeHelper.zip index.js parts.js ideas.js node_modules
	aws lambda update-function-code --function-name 'calliopeHelper' --zip-file 'fileb://calliopeHelper.zip'

.PHONY: deploy
