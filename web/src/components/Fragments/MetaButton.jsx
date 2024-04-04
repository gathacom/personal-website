import { Button } from "@/components/ui/button"

const MetaButton = ({ children, ...props }) => {
    return (
        <Button variant="outline" {...props}>
            {children}
        </Button>
    )
}

export default MetaButton