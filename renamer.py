import os

src = 'C:\\Users\\prest\\IdeaProjects\\FunProject\\cards\\'
listOfFiles = os.listdir(src)


def renameFiles():
        for count, filename in enumerate(listOfFiles):
            newFileName = ''
            if 'pe' in filename:
                newFileName = filename.replace('jpg', 'jpeg', 1)
                os.rename(src + filename, src + newFileName)
            print(newFileName)


renameFiles()
