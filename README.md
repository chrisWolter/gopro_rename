# GoPro chaptered video renaming tool

This tool renames Gopro chaptered videos to a better name convention for better sorting.
The files are renamed from: GH010001 and GH020001 to GH010001_1 and GH010001_2. With this new naming convention Windows and Mac can sort the files better.

## Warning

This Tool is currently under development. I cant ensure that your files are working properly after renaming, so please make sure you have a copy of your files.

## Installation

You need to install Node for using this tool. You can Download Node [Here!](https://nodejs.org/en/)

After installing Node open your command line (cmd) and go into the folder where the programm is located.
Like this if you have downloaded it currently.

```bash
 cd C:\Users\[Username]\gopro_rename
```

After directing into the folder just run:

```bash
 npm i -g
```
This will install the programm.

## Usage

To use the Gopro Rename Tool open your command line (cmd) and start the programm by using the gopro-rename command

```bash
gopro-rename
```

and just hit enter. Then you have to Select your Gopro Model and enter your file Path where your Gopro Files are located. Like this: 
```bash
C:\Users\[Username]\Gopro\Gopro files
```
Then the Programm will show you a List with all Files that will be renamed and what the new filename will be. If you want to rename those files you can choose if these files should be copied and renamed in a subfolder so the original files wouldnt be touched. If you choose not to copy and rename, the files in the main folder will be renamed.

## Support

If something wont work or you have a question. Feel free to contact me via email:

renaming.tool@chris-wolter.de

## Roadmap

Im currently Working to enhance the renaming Tool and in the future I want to implement these tools:

~~1: Add an CLI~~

~~2: Show what files would be renamed and select if it is ok to rename.~~

~~3: Dont rename a second time if the tool jsut run once over your files~~

~~4: Add a Progress Bar so see the status of the file copy and renaming~~

~~5: start Programm directly via command line with a keyword~~

6: Check if Hero 9 has new Naming and implement it

7: Update the duration time frequently

8: Undo Renaming

9: Publish to NPM


## License

This project runs under [MIT](https://choosealicense.com/licenses/mit/) license
