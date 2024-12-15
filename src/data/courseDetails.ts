export interface CourseDetail {
  id: string;
  title: string;
  image: string;
  description: string;
  duration: string;
  features: string[];
  fullDescription: string;
  curriculum: {
    week: string;
    topics: string[];
  }[];
  prerequisites: string[];
  learningOutcomes: string[];
  price: string;
}

export const courseDetails: Record<string, CourseDetail> = {
  'autocad': {
    id: 'autocad',
    title: 'AutoCAD / ZW',
    image: 'https://images.unsplash.com/photo-1545670723-196ed0954986',
    description: 'Master industry-standard CAD software for precise technical drawings and 2D/3D design.',
    duration: '4 weeks',
    features: ['Basic to advanced drafting', '2D and 3D modeling', 'Project-based learning'],
    fullDescription: 'Our comprehensive AutoCAD course is designed to take you from beginner to professional level. Learn industry-standard practices for architectural and engineering drawings.',
    curriculum: [
      {
        week: 'Week 1',
        topics: [
          'Introduction to AutoCAD interface',
          'Basic drawing commands',
          'Coordinate systems',
          'Drawing aids and object snaps'
        ]
      },
      {
        week: 'Week 2',
        topics: [
          'Advanced drawing techniques',
          'Layers and properties',
          'Blocks and external references',
          'Dimensioning'
        ]
      },
      {
        week: 'Week 3',
        topics: [
          'Layout and plotting',
          '3D modeling basics',
          'Surface modeling',
          'Solid modeling'
        ]
      },
      {
        week: 'Week 4',
        topics: [
          'Advanced 3D techniques',
          'Rendering',
          'Project work',
          'Final assessment'
        ]
      }
    ],
    prerequisites: [
      'Basic computer knowledge',
      'Understanding of geometric concepts',
      'Basic architectural or engineering knowledge (recommended)'
    ],
    learningOutcomes: [
      'Create professional 2D and 3D drawings',
      'Understand industry-standard CAD practices',
      'Develop project documentation',
      'Master advanced modeling techniques'
    ],
    price: '₹15,000'
  },
  'sketchup': {
    id: 'sketchup',
    title: 'SketchUp',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
    description: 'Learn 3D modeling and visualization for architectural designs.',
    duration: '3 weeks',
    features: ['3D modeling fundamentals', 'Material application', 'Scene composition'],
    fullDescription: 'Master SketchUp for architectural visualization and 3D modeling. Create stunning presentations and detailed 3D models efficiently.',
    curriculum: [
      {
        week: 'Week 1',
        topics: [
          'SketchUp interface',
          'Basic modeling tools',
          'Navigation and viewing',
          'Component creation'
        ]
      },
      {
        week: 'Week 2',
        topics: [
          'Advanced modeling techniques',
          'Materials and textures',
          'Shadows and lighting',
          'Scene setup'
        ]
      },
      {
        week: 'Week 3',
        topics: [
          'Layout and presentation',
          'Rendering plugins',
          'Project work',
          'Portfolio development'
        ]
      }
    ],
    prerequisites: [
      'Basic computer skills',
      'Understanding of 3D space',
      'Basic design knowledge'
    ],
    learningOutcomes: [
      'Create detailed 3D models',
      'Develop architectural presentations',
      'Master material and lighting techniques',
      'Generate professional renderings'
    ],
    price: '₹12,000'
  },
  'photoshop': {
    id: 'photoshop',
    title: 'Photoshop',
    image: 'https://images.unsplash.com/photo-1561998338-13ad7883b20f',
    description: 'Create stunning architectural visualizations and presentations.',
    duration: '2 weeks',
    features: ['Image editing', 'Post-processing', 'Presentation graphics'],
    fullDescription: 'Master Adobe Photoshop for architectural visualization and post-processing. Learn to create stunning presentations and enhance your architectural renderings.',
    curriculum: [
      {
        week: 'Week 1',
        topics: [
          'Photoshop interface and tools',
          'Basic image editing techniques',
          'Layer management',
          'Selection tools and masks',
          'Color correction and adjustment'
        ]
      },
      {
        week: 'Week 2',
        topics: [
          'Advanced post-processing techniques',
          'Architectural visualization enhancement',
          'Creating presentation layouts',
          'Digital art and effects',
          'Final project and portfolio work'
        ]
      }
    ],
    prerequisites: [
      'Basic computer skills',
      'Understanding of digital images',
      'Basic design principles'
    ],
    learningOutcomes: [
      'Master image editing techniques',
      'Create professional architectural presentations',
      'Enhance architectural renderings',
      'Develop a strong visualization portfolio'
    ],
    price: '₹10,000'
  },
  'revit': {
    id: 'revit',
    title: 'Revit',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    description: 'Master Building Information Modeling (BIM) for modern construction projects.',
    duration: '6 weeks',
    features: ['BIM fundamentals', 'Family creation', 'Documentation', 'Collaboration tools'],
    fullDescription: 'Comprehensive Revit training for architects and engineers. Learn BIM workflow, project setup, and advanced modeling techniques.',
    curriculum: [
      {
        week: 'Week 1',
        topics: [
          'Introduction to BIM concepts',
          'Revit interface and navigation',
          'Basic modeling tools',
          'Project setup and templates'
        ]
      },
      {
        week: 'Week 2',
        topics: [
          'Building elements and components',
          'Walls, doors, and windows',
          'Floors and roofs',
          'Stairs and railings'
        ]
      },
      {
        week: 'Week 3',
        topics: [
          'Family creation and editing',
          'Parameters and constraints',
          'Custom components',
          'Family libraries'
        ]
      },
      {
        week: 'Week 4',
        topics: [
          'Documentation and annotation',
          'Dimensions and tags',
          'Schedules and quantities',
          'Sheet setup and plotting'
        ]
      },
      {
        week: 'Week 5',
        topics: [
          'Collaboration tools',
          'Worksets and file sharing',
          'Cloud collaboration',
          'Team workflows'
        ]
      },
      {
        week: 'Week 6',
        topics: [
          'Advanced modeling techniques',
          'Site and topography',
          'Project management',
          'Final project presentation'
        ]
      }
    ],
    prerequisites: [
      'Basic architectural knowledge',
      'Understanding of building systems',
      'Basic computer skills',
      'AutoCAD experience (recommended)'
    ],
    learningOutcomes: [
      'Create complete BIM models',
      'Develop construction documentation',
      'Master family creation',
      'Implement BIM workflows',
      'Collaborate in team environments'
    ],
    price: '₹20,000'
  },
  'lumion': {
    id: 'lumion',
    title: 'Lumion',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
    description: 'Create photorealistic 3D renderings and animations.',
    duration: '3 weeks',
    features: ['Real-time rendering', 'Material creation', 'Animation basics', 'Scene composition'],
    fullDescription: 'Learn to create stunning architectural visualizations with Lumion. Master real-time rendering, materials, lighting, and animation techniques.',
    curriculum: [
      {
        week: 'Week 1',
        topics: [
          'Lumion interface and workflow',
          'Scene setup and navigation',
          'Import and optimization',
          'Basic materials and textures',
          'Lighting fundamentals'
        ]
      },
      {
        week: 'Week 2',
        topics: [
          'Advanced materials and effects',
          'Environmental settings',
          'Landscape and vegetation',
          'Interior visualization',
          'Custom material creation'
        ]
      },
      {
        week: 'Week 3',
        topics: [
          'Animation techniques',
          'Camera movement and paths',
          'Advanced effects and filters',
          'Post-processing',
          'Final project rendering'
        ]
      }
    ],
    prerequisites: [
      '3D modeling experience',
      'Basic understanding of materials and lighting',
      'Computer with dedicated graphics card'
    ],
    learningOutcomes: [
      'Create photorealistic renderings',
      'Master real-time visualization',
      'Develop architectural animations',
      'Build professional portfolios',
      'Enhance presentation skills'
    ],
    price: '₹15,000'
  }
};
