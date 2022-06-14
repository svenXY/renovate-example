export RENOVATE_CONFIG_FILE=$(pwd)/renovate-test-2.js  
export LOG_LEVEL=debug
export RENOVATE_LOG_FILE=renovate.log
export RENOVATE_LOG_FILE_LEVEL=debug

renovate --print-config
