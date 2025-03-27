import { useState, useEffect } from "react"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  Play,
  Github,
  FolderArchive,
  Code,
  Eye,
  Gamepad2,
  ChevronRight,
  Heart,
  Plus,
  Star,
  Download,
} from "lucide-react"

export default function GamePortal() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [activeGame, setActiveGame] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  const url = "http://localhost:4000"

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", updateCursor)

    axios
      .get(`${url}/api/games/allgameyt`)
      .then((response) => {
        const sortedGames = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        setGames(sortedGames)
        setActiveGame(sortedGames[0])
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching game data:", err)
        setError(err)
        setLoading(false)
      })

    return () => window.removeEventListener("mousemove", updateCursor)
  }, [])

  const getYoutubeThumbnail = (youtubeUrl) => {
    if (!youtubeUrl) return ""
    const regExp = /^.*((youtu.be\/)|(v\/)|(u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    const match = youtubeUrl.match(regExp)
    return match && match[7].length === 11 ? `https://img.youtube.com/vi/${match[7]}/hqdefault.jpg` : ""
  }

  const filteredGames = searchQuery
    ? games.filter((game) => game.gametitle.toLowerCase().includes(searchQuery.toLowerCase()))
    : games

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0A0A14]">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-sky-400 border-b-transparent rounded-full animate-pulse"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0A0A14]">
        <div className="text-center p-8 bg-red-900/20 backdrop-blur-md rounded-lg border border-red-500/50">
          <p className="text-2xl font-glitch text-red-400 animate-pulse">ERROR: FAILED TO LOAD GAME DATA</p>
          <p className="mt-4 text-red-300/70">Connection to game server lost</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-900 py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 [mask-image:linear-gradient(to_bottom,transparent,white)]">
        <div className="absolute inset-0 bg-[linear-gradient(#3B82F6_1px,transparent_1px),linear-gradient(to_right,#3B82F6_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>


      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.1)_0,rgba(9,9,20,0)_60%)]" />

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              backgroundColor: i % 2 === 0 ? "#818cf8" : "#38bdf8",
            }}
            animate={{
              y: [null, "-100vh"],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * -20,
            }}
          />
        ))}
      </div>

      {/* Header with search only */}
      <header className="relative z-10 px-8 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-sky-400">
          WEB GAMES
        </h1>


      </header>

      <main className="relative z-10 px-8 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content area */}
          <div className="flex-1">
            {/* Featured game banner */}
            {activeGame && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative rounded-xl overflow-hidden mb-10 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-800 z-0">
                  {/* Decorative elements */}
                  <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
                    <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.3)_0,rgba(9,9,20,0)_70%)]" />

                    {/* Abstract shapes */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={`shape-${i}`}
                        className="absolute bg-indigo-300/10"
                        style={{
                          clipPath:
                            i % 2 === 0
                              ? "polygon(0 0, 100% 0, 80% 100%, 20% 100%)"
                              : "polygon(20% 0, 80% 0, 100% 100%, 0% 100%)",
                          width: `${200 + Math.random() * 300}px`,
                          height: `${300 + Math.random() * 400}px`,
                          right: `${-50 + Math.random() * 100}px`,
                          top: `${-100 + Math.random() * 200}px`,
                          opacity: 0.3 + Math.random() * 0.4,
                          transform: `rotate(${Math.random() * 30}deg)`,
                        }}
                        animate={{
                          opacity: [null, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row h-full">
                  <div className="md:w-1/2 p-10 flex flex-col justify-center">

                    <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">{activeGame.gametitle}</h2>

                    <div className="flex space-x-4">
                      <motion.a
                        href={activeGame.gamelivePreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-indigo-900 px-6 py-3 rounded-md font-medium flex items-center justify-center text-sm"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Play className="mr-2 h-4 w-4" /> Play For Free
                      </motion.a>

                    </div>
                  </div>
                  <div className="md:w-1/2 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-transparent z-10 md:block hidden" />
                    <img
                      src={getYoutubeThumbnail(activeGame.gameyoutubeLink) || "/placeholder.svg"}
                      alt={activeGame.gametitle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Game categories */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Popular Games</h3>
                <button className="text-indigo-400 hover:text-white transition-colors text-sm font-medium flex items-center">
                  View all <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence>
                  {filteredGames.slice(0, 8).map((game, index) => (
                    <motion.div
                      key={game._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                      }}
                      onClick={() => setActiveGame(game)}
                      className="bg-gray-800/30 rounded-lg overflow-hidden cursor-pointer group hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
                    >
                      <div className="relative aspect-video">
                        <img
                          src={getYoutubeThumbnail(game.gameyoutubeLink) || "/placeholder.svg"}
                          alt={game.gametitle}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <motion.div className="bg-indigo-500 rounded-full p-3" whileHover={{ scale: 1.1 }}>
                            <Play className="text-white h-4 w-4" />
                          </motion.div>
                        </div>

                        {/* Game badge */}
                        <div className="absolute top-2 left-2 bg-indigo-500/90 text-white text-xs px-2 py-1 rounded font-medium">
                          Free
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-white font-medium line-clamp-1 group-hover:text-indigo-300 transition-colors">
                          {game.gametitle}
                        </h3>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center">
                            <Gamepad2 className="text-indigo-400 mr-1 h-3 w-3" />

                          </div>

                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>


          </div>

          {/* Sidebar */}
          <div className="lg:w-72 space-y-6">
            <div className="bg-gray-800/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-4">Top Games</h3>
              <div className="space-y-3">
                {games.slice(0, 6).map((game, index) => (
                  <motion.div
                    key={`sidebar-${game._id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onClick={() => setActiveGame(game)}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={getYoutubeThumbnail(game.gameyoutubeLink) || "/placeholder.svg"}
                        alt={game.gametitle}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white text-sm font-medium line-clamp-2 group-hover:text-indigo-300 transition-colors">
                        {game.gametitle}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Game details section */}
            {activeGame && (
              <div className="bg-gray-800/30 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-4">Game Details</h3>
                <div className="space-y-3">
                  <a
                    href={activeGame.githubgameLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-gray-300 hover:text-indigo-300 transition-colors p-2 rounded-lg hover:bg-gray-700/30"
                  >
                    <div className="flex items-center">
                      <Github className="mr-2 h-4 w-4" />
                      <span className="text-sm">Source Code</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                  <a
                    href={activeGame.gamedriveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-gray-300 hover:text-indigo-300 transition-colors p-2 rounded-lg hover:bg-gray-700/30"
                  >
                    <div className="flex items-center">
                      <FolderArchive className="mr-2 h-4 w-4" />
                      <span className="text-sm">Game Assets</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                  <a
                    href={activeGame.gameyoutubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-gray-300 hover:text-indigo-300 transition-colors p-2 rounded-lg hover:bg-gray-700/30"
                  >
                    <div className="flex items-center">
                      <Code className="mr-2 h-4 w-4" />
                      <span className="text-sm">Tutorial</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                  <a
                    href={activeGame.gamelivePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-gray-300 hover:text-indigo-300 transition-colors p-2 rounded-lg hover:bg-gray-700/30"
                  >
                    <div className="flex items-center">
                      <Eye className="mr-2 h-4 w-4" />
                      <span className="text-sm">Play Live</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            )}


          </div>
        </div>
      </main>
    </div>
  )
}

