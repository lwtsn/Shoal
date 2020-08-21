
typechain:
	- ./node_modules/.bin/typechain --target ethers --outDir typechain 'build/*.json'

compile:
	- npx buidler compile