import { motion } from "framer-motion" // Import motion from framer-motion


const For = ({ username, isForClicked }) => {
  return (
    <>
      {/* Animate the pink div's height with Framer Motion */}
      <motion.div
        className="pink"
        style={{ backgroundColor: "#ec7063",width: "40vw", }}
        animate={{ height: isForClicked ? "50vh" : "8vh" }} // Transition between 8vh and 50vh
        transition={{ duration: 0.5 }} // Smooth transition
      />

      {/* For component content */}
      <div
        className={`for-card ${isForClicked ? "move-down" : ""}`}
        style={{
          height: "60vh",
          width: "40vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2vh", // Adjusted font size for better readability
          fontStyle: "italic",
          color: "#f9fcfc",
          backgroundColor: "#660000",
          borderRadius: "10px",
          cursor: "pointer",
          position: "relative", // Ensure the card has a proper stacking context for movement
        }}
      >
        <h1 style={{ fontSize: "3vh", fontWeight: "bold" }}>To {username}</h1> {/* Display username */}
      </div>
    </>
  )
}

export default For

