# Windows
::: details
**Many of the commands applies to:** Windows 8.1, Windows 8.1 Enterprise Windows, 8.1 Pro Windows, 8 Windows, 8 Enterprise Windows, 8 Pro Windows, 7 Enterprise Windows, 7 Home Basic Windows, 7 Home Premium Windows, 7 Professional Windows, 7 Starter Windows, 7 Ultimate Windows Vista Enterprise 64-bit Edition, Windows Vista Ultimate 64-bit Edition, Windows Vista Business, Windows Vista Business 64-bit Edition, Windows Vista Enterprise, Windows Vista Ultimate, Windows 10, Windows 11
:::

## Repair Commands

**SFC**

````md
sfc /scannow
````
::: info
Why do we use /scannow parameter, we use it because we want to start the proccess of scanning, to find corrupted files.
:::
Description: System File Checker, aka sfc, It scans and verifies the integrity of all protected system files and replaces incorrect versions with correct versions. If this command discovers that a protected file has been overwritten, it retrieves the correct version of the file from the ***`systemroot\`*** folder, and then replaces the incorrect file.

**CHKDSK**

````md
chkdsk /f
````
::: info
Why do we use /f parameter, we use it because we want to start the proccess of scanning, to find corrupted files.
:::
Description: Checks the file system and file system metadata of a volume for logical and physical errors. If used without parameters, chkdsk displays only the status of the volume and doesn't fix any errors. If used with the **/f, /r, /x,** or **/b** parameters, it fixes errors on the volume.

![Diagram](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/images/servicing_mount.png)

````md
DISM /Online /Cleanup-image /Restorehealth
````
Description: Deployment Image Servicing and Management, is a built-in Windows command-line tool used to service, prepare, and repair system images (like Windows PE, Recovery Environment, or your local OS).
::: details
Applies To: Windows 10 and Windows 11 only.
:::