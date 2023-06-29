import toast from "react-hot-toast"

export const notifySaved = () => toast('New task saved!', {
    duration: 2000,
    position: "top-center",
    icon: "✅"
});

export const notifyDeleted = () => toast('Task deleted!', {
    duration: 2000,
    position: "top-center",
    icon: "❌"
});

export const notifyCompleted = () => toast('Task completed!', {
    duration: 2000,
    position: "top-center",
    icon: "🤩"
});

/* export const notifyEdited = () => toast('Task edited succesfully!', {
    duration: 2000,
    position: "bottom-center",
    icon: "🫡"
}); */