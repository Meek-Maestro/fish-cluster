// Mock data
const mockPonds = [
  {
    id: 'POND-001',
    name: 'North Pond Alpha',
    status: 'green',
    deviceStatus: 'online',
    lastUpdate: new Date(Date.now() - 2 * 60000),
    location: 'Sector A1',
    capacity: '50,000L',
    sensorData: {
      dissolvedOxygen: 7.2,
      temperature: 28.5,
      ph: 7.8,
      turbidity: 12
    },
    lastFeed: new Date(Date.now() - 45 * 60000),
    state: 'normal',
    fishCount: 1200,
    cvInsights: {
      healthScore: 92,
      activityLevel: 'High',
      detectedIssues: []
    }
  },
  {
    id: 'POND-002',
    name: 'South Pond Beta',
    status: 'amber',
    deviceStatus: 'online',
    lastUpdate: new Date(Date.now() - 5 * 60000),
    location: 'Sector B2',
    capacity: '75,000L',
    sensorData: {
      dissolvedOxygen: 5.8,
      temperature: 29.2,
      ph: 7.5,
      turbidity: 18
    },
    lastFeed: new Date(Date.now() - 30 * 60000),
    state: 'stress',
    fishCount: 1800,
    cvInsights: {
      healthScore: 78,
      activityLevel: 'Medium',
      detectedIssues: ['Slight crowding in SW corner']
    }
  },
  {
    id: 'POND-003',
    name: 'East Pond Gamma',
    status: 'red',
    deviceStatus: 'offline',
    lastUpdate: new Date(Date.now() - 35 * 60000),
    location: 'Sector C3',
    capacity: '60,000L',
    sensorData: {
      dissolvedOxygen: 4.2,
      temperature: 30.8,
      ph: 7.2,
      turbidity: 25
    },
    lastFeed: new Date(Date.now() - 180 * 60000),
    state: 'emergency',
    fishCount: 1500,
    cvInsights: {
      healthScore: 62,
      activityLevel: 'Low',
      detectedIssues: ['Surface gasping detected', 'Reduced feeding activity']
    }
  },
  {
    id: 'POND-004',
    name: 'West Pond Delta',
    status: 'green',
    deviceStatus: 'online',
    lastUpdate: new Date(Date.now() - 1 * 60000),
    location: 'Sector D4',
    capacity: '50,000L',
    sensorData: {
      dissolvedOxygen: 7.5,
      temperature: 27.8,
      ph: 7.9,
      turbidity: 10
    },
    lastFeed: new Date(Date.now() - 60 * 60000),
    state: 'normal',
    fishCount: 1100,
    cvInsights: {
      healthScore: 95,
      activityLevel: 'High',
      detectedIssues: []
    }
  }
];