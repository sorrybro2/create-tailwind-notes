import { defineConfig } from 'tsup';

export default defineConfig({
  // 진입점 (시작 파일)
  entry: ['src/index.ts'],
  
  // 출력 형식 (ESM = 최신 import/export)
  format: ['esm'],
  
  // .d.ts 파일 생성 (타입 정의)
  dts: true,
  
  // 코드 분할 안 함 (CLI는 하나의 파일로)
  splitting: false,
  
  // 소스맵 생성 (디버깅용)
  sourcemap: true,
  
  // 빌드 전에 dist 폴더 청소
  clean: true,
  
  // Node.js 호환성 shim 추가
  shims: true,
  
  // CLI 실행을 위한 shebang 추가
  banner: {
    js: '#!/usr/bin/env node',
  },
});

