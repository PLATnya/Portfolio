export type ProjectCategory = 'projects' | 'games' | 'game_prototypes';

export interface Project {
  title: string;
  description?: string;
  link?: string;
  status?: string;
  released?: boolean;
  images?: string[];
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: 'MAIDASH',
    description:
      'An interactive board application with RAG and search capabilities. Work in progress. This is the spiritual successor of AdvancedSearch which seeks the goal to combine searching, retrieval and reasoning capabilities into one tool for custom visual research.',
    link: 'https://github.com/PLATnya/MAIDASH',
    tags: ['AI', 'RAG', 'Board', 'Python', 'LangChain', 'Ollama', 'Cytoscape.js'],
    images: [
      'https://github.com/PLATnya/MAIDASH/blob/dev/imgs/examples/1.png?raw=true',
      'https://github.com/PLATnya/MAIDASH/blob/dev/imgs/examples/2.png?raw=true',
      'https://github.com/PLATnya/MAIDASH/blob/dev/imgs/examples/5.png?raw=true',
      'https://github.com/PLATnya/MAIDASH/blob/dev/imgs/examples/6.png?raw=true',
    ],
    status: 'in development',
  },
  {
    title: 'Torcunta',
    description: 'Actor based framework with unified comunication despite of environment',
    link: 'https://github.com/PLATnya/torcunta',
    tags: ['C++', 'Python', 'CMake', 'Rust'],
    status: 'in progress, closed code'
  },
  {
    title: 'ZedEmbrion',
    description: 'Visual control flow developmend IDE based on ZED',
    link: 'https://github.com/PLATnya/zed_embrion',
    tags: ['Rust'],
    status: 'in progress, closed code'
  },
    {
    title: 'remouse',
    description: 'Trying to reinvent human-mouse interaction',
    link: 'https://github.com/PLATnya/remouse/tree/dev',
    tags: ['Python'],
    status: 'in progress'
  },
  {
    title: 'AdvancedSearch',
    description: 'Formatting the search process into interactive graph form for continues reusing',
    link: 'https://github.com/PLATnya/advanced-search',
    images: [
      'https://lh3.googleusercontent.com/d/1LFeaqwoqC7vv0So6MgFPAv5RLts0WZ7y=w1000',
      'https://lh3.googleusercontent.com/d/1FqFVYEFrF63vVwFqXuBsa2DjUK5LVDHL=w1000',
    ],
    tags: ['Search', 'Graph', 'Interactive'],
    status: 'stopped prototype'
  },
  {
    title: 'First Person Player Plugin',
    description: 'First person player content plugin for Unreal Engine',
    link: 'https://github.com/PLATnya/FirstPersonPlayerPlugin',
    status: 'on pause',
    tags: ['Unreal Engine', 'Plugin', 'C++'],
  },
  {
    title: 'Interaction System Plugin',
    description: 'Player interaction system content plugin for Unreal Engine',
    link: 'https://github.com/PLATnya/InteractionSystemPlugin',
    status: 'on pause',
    tags: ['Unreal Engine', 'Plugin', 'C++'],
  },
  {
    title: 'Python Voxel Engine',
    description: 'Voxel engine prototype base on PyOpenGL',
    link: 'https://github.com/PLATnya/VoxelEngine',
    tags: ['Python', 'PyOpenGL', 'Voxel'],
    status: 'stopped prototype'
  }
];

export const games: Project[] = [
  {
    title: 'Century: Age of Ashes',
    description: 'A multiplayer online battle arena game',
    link: 'https://century-age-of-ashes.com/',
    tags: ['Multiplayer', 'Online', 'Unreal Engine', 'C++'],
    images: [
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.century-age-of-ashes.com%2Fwp-content%2Fuploads%2F2021%2F11%2Fcenturyaoa_splashart_1200x630.jpg&f=1&nofb=1&ipt=f7eba8f103ed5d25c7d07b475b5e33496967a9124a121e6fdcffd9a219dc46bd',
      'https://century-age-of-ashes.com/wp-content/uploads/2021/07/opt_H_carrousel_Phantom-Menu-1024x576.jpg',
      'https://century-age-of-ashes.com/wp-content/uploads/2021/07/opt_H_carrousel_Chieftain-Market-1024x576.jpg',
      'https://century-age-of-ashes.com/wp-content/uploads/2021/07/opt_H_carrousel_Tower-1024x576.jpg',
    ],
    released: true,
  },
  {
    title: 'Fear Of Faith',
    description: 'Cooperative horror game. Work in progress.',
    link: 'https://store.steampowered.com/app/3312250/FEAR_OF_FAITH',
    tags: ['COOP', 'Online', 'Unreal Engine', 'C++'],
    images: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3312250/409d279687c546b6ed2b062b18d8c380426a02f7/header.jpg?t=1761583807',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3312250/2d36ba381a99afa781d2121eb322e6fffbc817ee/ss_2d36ba381a99afa781d2121eb322e6fffbc817ee.1920x1080.jpg?t=1761583807',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3312250/ss_915236ff24b2ae8c2ec8c7712650359a4777810d.1920x1080.jpg?t=1761583807',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3312250/1a7fb48ff7b6eefa79f70be9bf821d528c940807/ss_1a7fb48ff7b6eefa79f70be9bf821d528c940807.1920x1080.jpg?t=1761583807',
    ],
    released: true,
  },
  {
    title: 'Cronos: The New Dawn',
    description: 'Survival horror game',
    link: 'https://cronosnewdawn.com',
    released: true,
    tags: ['Survival', 'Horror', 'Unreal Engine', 'C++'],
    images: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2101960/1d91e69b002ec707cf6b1e82be45b4880597491f/header.jpg?t=1761589474',
      'https://cronosnewdawn.com/img/gallery/Cronos-Tram_1920.jpg',
      'https://cronosnewdawn.com/img/gallery/Cronos-GravityJump_1920.jpg',
      'https://cronosnewdawn.com/img/gallery/Cronos-Corridor_1920.jpg',
    ],
  },
];

export const game_prototypes: Project[] = [
  {
    title: 'UE4 FPS Prototype',
    description: 'First person shooter prototype on Gameplay Ability System base (planned with coop integration)',
    link: 'https://github.com/PLATnya/SampleUnrealCoopShooter',
    tags: ['Unreal Engine', 'GAS', 'FPS', 'Coop'],
  },
  {
    title: 'Unity FPS Prototype',
    description: 'Unity First person shooter prototype',
    link: 'https://github.com/PLATnya/ZHV-2019ShotterGamePrototype',
    tags: ['Unity', 'FPS'],
  },
  {
    title: 'Unity Snake Runner',
    description: "Unity snake 'runner' prototype",
    link: 'https://github.com/PLATnya/SnakePrototype',
    tags: ['Unity', 'Snake', 'Runner'],
  },
  {
    title: 'Unity DOTS Prototype',
    description: 'Unity DOTS using prototype',
    link: 'https://github.com/PLATnya/RainPrototype',
    tags: ['Unity', 'DOTS', 'ECS'],
  },
  {
    title: 'C# Go Game',
    description: 'Go game prototype',
    link: 'https://github.com/PLATnya/GoGame',
    tags: ['C#', 'Go', 'Board Game'],
  },
  {
    title: 'Cocos2D Snake Game',
    description: 'Snake game on C++ Cocos2D engine',
    link: 'https://github.com/PLATnya/FlowerGame',
    tags: ['C++', 'Cocos2D', 'Snake'],
  },
];

export const categories: { id: ProjectCategory; title: string; items: Project[] }[] = [
  { id: 'games', title: 'Games', items: games },
  { id: 'projects', title: 'Projects', items: projects },
  { id: 'game_prototypes', title: 'Game Prototypes', items: game_prototypes },
];
