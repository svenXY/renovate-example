export RENOVATE_CONFIG_FILE=$(pwd)/renovate-backends.js
export ARTIFACTORY_USER=a_user
export ARTIFACTORY_PWD=his_token
export ARTIFACTORY_PWD_B64=his_token_in_b64
export RENOVATE_TOKEN=other_token
export LOG_LEVEL=debug
export RENOVATE_LOG_FILE=renovate.log
export RENOVATE_LOG_FILE_LEVEL=debug

renovate
