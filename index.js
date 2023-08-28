import fs from 'fs';
import path from 'path';
import admzip from 'adm-zip';
import inquirer from 'inquirer';

const zipPath = "./enterDir/a.zip";
const output = "./extractFile/";

const menuOptions = {
    type: "list",
    name: "menuItem",
    message: "Escolha uma opção",
    choices: [
        'Extract',
        'Compact',
        'Sair'
    ]
}

async function verifyFolder() {
    try {
      await fs.stat(output)
    } catch{
      fs.mkdir(output)
    }
  }

async function extractFiles(){
       
    const zip = new admzip(zipPath);
    
    zip.extractAllToAsync(output, true, function (error) {
        if (error) {
            console.error("Erro ao extrair os arquivos:", error);
        } else {
            console.log("Arquivos extraídos com sucesso!");
        }
    });
}

async function showMenu() {
    const answer = await inquirer.prompt(menuOptions);
    
    switch (answer.menuItem) {
      case 'Extract':
        console.log("a")
        extractFiles()
        break;
      case 'Compact':
        console.log("a")
        break;
      case 'Sair':
        console.log('Saindo do menu.');
        return;
    }
  }

showMenu()

