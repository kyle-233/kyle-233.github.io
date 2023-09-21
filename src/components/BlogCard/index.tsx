import { Card, CardBody, CardFooter, CardHeader, Chip } from "@nextui-org/react"

interface LabelItem {
    node: {
        name: string
    }
}

interface BlogCardProps {
    title: string
    labels: LabelItem[]
    createdAt: string
}

const BlogCard = ({ title, labels, createdAt }: BlogCardProps): JSX.Element => {
    return (
        <Card className="py-4">
            <CardHeader className="py-0 px-4 flex-col items-start">
                <h1 className="font-bold text-large">{title}</h1>
            </CardHeader>
            <CardBody className="overflow-visible py-2 px-4">
                <div className="h-6 flex gap-2">

                    {
                        labels.length === 0 ?
                            '标签'
                            : (
                                labels.map(label => (
                                    <Chip key={label.node.name} size="sm">{label.node.name}</Chip>
                                ))
                            )
                    }
                </div>
            </CardBody>
            <CardFooter className="gap-3 pb-0 px-4">
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">{createdAt}</p>
                </div>
            </CardFooter>
        </Card>
    )
}

export default BlogCard