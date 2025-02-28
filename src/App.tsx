import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Coins, Crown, Sparkles, Users } from 'lucide-react';

// Define user type for leaderboard
interface User {
  id: number;
  name: string;
  avatar: string;
  coins: number;
  rank: number;
  progress: number;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeUserId, setActiveUserId] = useState<number | null>(null);

  // Track mouse position for cursor effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Simulate fetching user data
  useEffect(() => {
    const fetchUsers = async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data with Indian names
      const mockUsers: User[] = [
        {
          id: 1,
          name: "Arjun Sharma",
          //avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
          coins: 2840,
          rank: 1,
          progress: 92
        },
        {
          id: 2,
          name: "Priya Patel",
          avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
          coins: 2650,
          rank: 2,
          progress: 87
        },
        {
          id: 3,
          name: "Vikram Singh",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
          coins: 2320,
          rank: 3,
          progress: 78
        },
        {
          id: 4,
          name: "Ananya Desai",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
          coins: 2150,
          rank: 4,
          progress: 72
        },
        {
          id: 5,
          name: "Rohan Kapoor",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
          coins: 1980,
          rank: 5,
          progress: 66
        },
        {
          id: 6,
          name: "Meera Joshi",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
          coins: 1820,
          rank: 6,
          progress: 61
        },
        {
          id: 7,
          name: "Aditya Reddy",
          //avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
          coins: 1650,
          rank: 7,
          progress: 55
        },
        {
          id: 8,
          name: "Neha Gupta",
          //avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
          coins: 1490,
          rank: 8,
          progress: 50
        }
      ];
      
      setUsers(mockUsers);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  // Render rank badge based on position
  const renderRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Medal className="h-6 w-6 text-amber-700" />;
      default:
        return <span className="text-gray-500 font-bold">{rank}</span>;
    }
  };

  // Handle hover effect
  const handleMouseEnter = (userId: number) => {
    setActiveUserId(userId);
  };

  const handleMouseLeave = () => {
    setActiveUserId(null);
  };

  return (
    <div className="min-h-screen bg-navy-900 text-white" style={{ backgroundColor: "#0A1A2F" }}>
      {/* Cursor effect */}
      <div 
        className="pointer-events-none fixed top-0 left-0 w-40 h-40 rounded-full bg-white opacity-5 blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-0"
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px`,
          transition: 'transform 0.1s ease-out, opacity 0.2s ease'
        }}
      />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="h-8 w-8 text-yellow-400" />
            <h1 className="text-4xl font-bold tracking-tight">Elevate Fit Leaderboard</h1>
          </div>
          <p className="text-blue-200 text-center max-w-2xl">
            Compete with other fitness enthusiasts, earn coins, and climb the ranks to become the ultimate Elevate Fit champion!
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-300" />
              <h2 className="text-xl font-semibold">Top Performers</h2>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Coins className="h-5 w-5 text-yellow-300" />
              <span className="font-medium">Fitness Coins</span>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-300"></div>
            </div>
          ) : (
            <div className="space-y-4">
              {users.map((user) => (
                <div 
                  key={user.id}
                  className={`relative bg-white/5 rounded-xl p-4 transition-all duration-300 transform hover:scale-[1.02] hover:bg-white/10 ${activeUserId === user.id ? 'ring-2 ring-blue-400 shadow-lg' : ''}`}
                  onMouseEnter={() => handleMouseEnter(user.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Sparkle effects for top 3 */}
                  {user.rank <= 3 && (
                    <div className="absolute -top-1 -right-1">
                      <Sparkles className={`h-6 w-6 ${user.rank === 1 ? 'text-yellow-400' : user.rank === 2 ? 'text-gray-300' : 'text-amber-600'} animate-pulse`} />
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full ${user.rank === 1 ? 'bg-yellow-500/20' : user.rank === 2 ? 'bg-gray-400/20' : user.rank === 3 ? 'bg-amber-700/20' : 'bg-gray-500/20'}`}>
                        {renderRankBadge(user.rank)}
                      </div>
                      
                      <div className="relative">
                        <img 
                          src={user.avatar} 
                          alt={user.name} 
                          className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${user.rank <= 3 ? 'bg-gradient-to-r from-blue-600 to-cyan-500' : 'bg-gray-700'}`}>
                          {user.rank}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg">{user.name}</h3>
                        <div className="mt-1 w-full bg-gray-700/50 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${user.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-amber-500' : user.rank === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-400' : user.rank === 3 ? 'bg-gradient-to-r from-amber-700 to-amber-600' : 'bg-gradient-to-r from-blue-500 to-cyan-500'}`}
                            style={{ 
                              width: `${user.progress}%`,
                              transition: 'width 1s ease-in-out'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Coins className="h-5 w-5 text-yellow-300" />
                      <span className="font-bold text-xl">
                        {activeUserId === user.id ? (
                          <span className="animate-pulse">{user.coins.toLocaleString()}</span>
                        ) : (
                          user.coins.toLocaleString()
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-8 text-center">
            <p className="text-blue-200 text-sm">
              Complete workouts, challenges, and daily goals to earn more coins and climb the leaderboard!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;