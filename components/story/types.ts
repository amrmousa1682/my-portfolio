export interface Choice {
  text: string;
  nextScene: string;
  link?: string;
}

export interface Scene {
  id: string;
  background: string;
  characterName: string;
  dialogue: string;
  choices: Choice[];
}

export interface StoryData {
  exitButton: string;
  skipText: string;
  scenes: Record<string, Scene>;
}
