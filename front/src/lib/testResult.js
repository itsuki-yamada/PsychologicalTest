import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

// テスト結果データパス
const testResultDirectory = path.join(process.cwd(), 'data', 'result');

export const getAllResultIds = () => {
  const fileNames = fs.readdirSync(testResultDirectory);
  return fileNames.map((fileName) => ({ id: fileName.replace(/.md/, '') }));
};

export async function getResultData(id) {
  const fullPath = path.join(testResultDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const parseMd = await remark().use(html).process(fileContents);
  return {
    id,
    contentHtml: parseMd.toString(),
  };
}
