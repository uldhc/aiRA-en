import { TaskTypeConfig } from "../../app/types/prompt.types"

import altTextSwedishPrompt from '../prompts/altTextMainSwedish.txt?raw';
import altTextFilenameSwedishPrompt from '../prompts/altTextFilenameSwedish.txt?raw';
import altTextTranslateSwedishPrompt from '../prompts/altTextTranslateSwedish.txt?raw';

import altTextFinnishPrompt from '../prompts/altTextMainFinnish.txt?raw';
import altTextFilenameFinnishPrompt from '../prompts/altTextFilenameFinnish.txt?raw';
import altTextTranslateFinnishPrompt from '../prompts/altTextTranslateFinnish.txt?raw';

import altTextEnglishPrompt from '../prompts/altTextMainEnglish.txt?raw';
import altTextFilenameEnglishPrompt from '../prompts/altTextFilenameEnglish.txt?raw';
import altTextTranslateEnglishPrompt from '../prompts/altTextTranslateEnglish.txt?raw';

import altTextLatvianPrompt from '../prompts/altTextMainLatvian.txt?raw';
import altTextFilenameLatvianPrompt from '../prompts/altTextFilenameLatvian.txt?raw';
import altTextTranslateLatvianPrompt from '../prompts/altTextTranslateLatvian.txt?raw';

import altTextLithuanianPrompt from '../prompts/altTextMainLithuanian.txt?raw';
import altTextFilenameLithuanianPrompt from '../prompts/altTextFilenameLithuanian.txt?raw';
import altTextTranslateLithuanianPrompt from '../prompts/altTextTranslateLithuanian.txt?raw';

import altTextDanishPrompt from '../prompts/altTextMainDanish.txt?raw';
import altTextFilenameDanishPrompt from '../prompts/altTextFilenameDanish.txt?raw';
import altTextTranslateDanishPrompt from '../prompts/altTextTranslateDanish.txt?raw';

import altTextEstonianPrompt from '../prompts/altTextMainEstonian.txt?raw';
import altTextFilenameEstonianPrompt from '../prompts/altTextFilenameEstonian.txt?raw';
import altTextTranslateEstonianPrompt from '../prompts/altTextTranslateEstonian.txt?raw';

import altTextIcelandicPrompt from '../prompts/altTextMainIcelandic.txt?raw';
import altTextFilenameIcelandicPrompt from '../prompts/altTextFilenameIcelandic.txt?raw';
import altTextTranslateIcelandicPrompt from '../prompts/altTextTranslateIcelandic.txt?raw';

import altTextNorwegianPrompt from '../prompts/altTextMainNorwegian.txt?raw';
import altTextFilenameNorwegianPrompt from '../prompts/altTextFilenameNorwegian.txt?raw';
import altTextTranslateNorwegianPrompt from '../prompts/altTextTranslateNorwegian.txt?raw';

import altTextGermanPrompt from '../prompts/altTextMainGerman.txt?raw';
import altTextFilenameGermanPrompt from '../prompts/altTextFilenameGerman.txt?raw';
import altTextTranslateGermanPrompt from '../prompts/altTextTranslateGerman.txt?raw';

import transcriptionIncludeHeadersPrompt from '../prompts/transcriptionIncludeHeaders.txt?raw';
import transcriptionIgnoreHeadersPrompt from '../prompts/transcriptionIgnoreHeaders.txt?raw';
import transcriptionTeiPrompt from '../prompts/transcriptionTei.txt?raw';
import transcriptionBatchTeiPrompt from '../prompts/transcriptionBatchTei.txt?raw';

/*
console.log(
  '[DEBUG] transcriptionBatchTeiPrompt loaded:',
  transcriptionBatchTeiPrompt.slice(0, 2000)
);
*/

export type TaskTypeId = 'altText' | 'transcription' | 'transcriptionBatchTei';
export type LanguageCode = 'en' | 'de' | 'dk' | 'ee' | 'fi' | 'is' | 'lt' | 'lv' | 'no' | 'sv' ;

export const TASK_CONFIGS: TaskTypeConfig[] = [
  {
    taskType: 'altText',
    label: 'Generate alt texts',
    taskDescription: 'Generate concise, accessible alt text descriptions for images, processing each image individually.',
    nouns: {
      singular: 'alt text',
      plural: 'alt texts'
    },
    defaultModel: 'gpt-4.1',
    variants: [
      {
        id: 'en',
        label: 'English',
        languageCode: 'en',
        prompt: altTextEnglishPrompt
      },
      {
        id: 'dk',
        label: 'Danish',
        languageCode: 'dk',
        prompt: altTextDanishPrompt
      },
      {
        id: 'de',
        label: 'German',
        languageCode: 'de',
        prompt: altTextGermanPrompt
      },
      {
        id: 'ee',
        label: 'Estonian',
        languageCode: 'ee',
        prompt: altTextEstonianPrompt
      },
      {
        id: 'fi',
        label: 'Finnish',
        languageCode: 'fi',
        prompt: altTextFinnishPrompt
      },
      {
        id: 'is',
        label: 'Icelandic',
        languageCode: 'is',
        prompt: altTextIcelandicPrompt
      },
      {
        id: 'lt',
        label: 'Lithuanian',
        languageCode: 'lt',
        prompt: altTextLithuanianPrompt
      },
      {
        id: 'lv',
        label: 'Latvian',
        languageCode: 'lv',
        prompt: altTextLatvianPrompt
      },
      {
        id: 'no',
        label: 'Norwegian',
        languageCode: 'no',
        prompt: altTextNorwegianPrompt
      },
      {
        id: 'sv',
        label: 'Swedish',
        languageCode: 'sv',
        prompt: altTextSwedishPrompt
      },

    ],
    helpers: {
      filenamePrompt: {
        sv: altTextFilenameSwedishPrompt,
        fi: altTextFilenameFinnishPrompt,
        en: altTextFilenameEnglishPrompt,
        lv: altTextFilenameLatvianPrompt,
        lt: altTextFilenameLithuanianPrompt,
        dk: altTextFilenameDanishPrompt,
        ee: altTextFilenameEstonianPrompt,
        is: altTextFilenameIcelandicPrompt,
        no: altTextFilenameNorwegianPrompt,
        de: altTextFilenameGermanPrompt
      },
      translatePrompt: {
        sv: altTextTranslateSwedishPrompt,
        fi: altTextTranslateFinnishPrompt,
        en: altTextTranslateEnglishPrompt,
        lv: altTextTranslateLatvianPrompt,
        lt: altTextTranslateLithuanianPrompt,
        ee: altTextTranslateEstonianPrompt,
        dk: altTextTranslateDanishPrompt,
        no: altTextTranslateNorwegianPrompt,
        is: altTextTranslateIcelandicPrompt,
        de: altTextTranslateGermanPrompt
      },
    },
  },
  {
    taskType: 'transcription',
    label: 'Transcribe',
    taskDescription: 'Transcribe text from images one by one and optionally encode each transcription as TEI XML in a separate step.',
    nouns: {
      singular: 'transcription',
      plural: 'transcriptions'
    },
    defaultModel: 'gemini-3.1-pro-preview',
    variants: [
      {
        id: 'default',
        label: 'Include headers/footers',
        prompt: transcriptionIncludeHeadersPrompt
      },
      { id: 'noHeaders',
        label: 'Ignore headers/footers/page numbers',
        prompt: transcriptionIgnoreHeadersPrompt
      },
    ],
    helpers: {
      teiEncodePrompt: transcriptionTeiPrompt
    }
  },
  {
    taskType: 'transcriptionBatchTei',
    label: 'Transcribe + TEI encode (batched)',
    taskDescription: 'Transcribe text from multiple images in batches and encode the results as TEI XML in a single combined step.',
    nouns: {
      singular: 'TEI transcription (batched)',
      plural: 'TEI transcriptions (batched)'
    },
    defaultModel: 'gemini-3.1-pro-preview',
    variants: [
      {
        id: 'default',
        label: 'TEI body (batched, no running headers)',
        prompt: transcriptionBatchTeiPrompt
      }
    ]
  }
] as const;

// Map of task types for lookups
export const TASK_TYPES_BY_ID = Object.fromEntries(
  TASK_CONFIGS.map(t => [t.taskType, t])
) as Record<TaskTypeId, TaskTypeConfig>;
