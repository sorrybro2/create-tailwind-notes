#!/usr/bin/env node

// 1️⃣ Import: 필요한 라이브러리 가져오기
import { Command } from 'commander';
import chalk from 'chalk';

// 2️⃣ CLI 프로그램 생성
const program = new Command();

// 3️⃣ CLI 기본 정보 설정
program
  .name('create-tailwind-notes')
  .description('Create a new React + Tailwind CSS notes application')
  .version('1.0.0');

// 4️⃣ 명령어 정의
program
  .argument('[project-name]', 'Name of the project to create')
  .option('--skip-install', 'Skip npm install', false)
  .action(async (projectName: string | undefined, options) => {
    // 임시로 간단한 출력만
    console.log(chalk.cyan('🎨 Create Tailwind Notes App'));
    console.log(chalk.green(`Project name: ${projectName || 'Not provided'}`));
    console.log(chalk.yellow(`Skip install: ${options.skipInstall}`));
  });

// 5️⃣ 명령어 파싱 및 실행
program.parse();

