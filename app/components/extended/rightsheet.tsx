import { Button } from "~/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet"
import RegistrationTeacher from "~/routes/teacherregistration"
import { ScrollArea } from "../ui/scroll-area"

export function Sheetright() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent className="p-1">
                <ScrollArea className="flex h-full p-3">
                    <RegistrationTeacher />
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                        </SheetClose>
                    </SheetFooter>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}
