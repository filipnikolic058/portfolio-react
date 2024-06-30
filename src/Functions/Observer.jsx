export default function Observe(ref, setIsVisible){
    const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        },
        { threshold: 0.6 }
    );

    if (ref.current) {
        observer.observe(ref.current);
    }

    return () => {
        if (ref.current) {
            observer.unobserve(ref.current);
        }
    };
}