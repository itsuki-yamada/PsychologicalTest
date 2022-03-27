import fs from 'fs';
import path from 'path';

// sample心理テストデータ読み込み
const testsDirectory = path.join(process.cwd(), 'data', 'test');

export const getAllTestIds = () => {
  const fileNames = fs.readdirSync(testsDirectory);
  return fileNames.map((fileName) => ({ id: fileName.replace(/.json/, '') }));
};

export const getAllTestHeaders = () => {
  const testIds = getAllTestIds();
  return testIds.map((test) => {
    const filePath = path.join(testsDirectory, `${test.id}.json`);
    const { mtime } = fs.statSync(filePath);
    const testFile = fs.readFileSync(filePath);
    const testData = JSON.parse(testFile);
    return {
      id: test.id,
      title: testData.title,
      description: testData.description,
      updatedDate: mtime.toUTCString(),
    };
  });
};

export const getTestData = (testId) => {
  const filePath = path.join(testsDirectory, `${testId}.json`);
  const testFile = fs.readFileSync(filePath);
  return JSON.parse(testFile);
};
