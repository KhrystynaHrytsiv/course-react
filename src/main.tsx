import {createRoot} from 'react-dom/client'
import './index.css'
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./useQueryClient.ts";
import {NewApp} from "./NewApp.tsx";


createRoot(document.getElementById('root')!)
    .render(<QueryClientProvider client={queryClient}>
        {/*<App/>*/}
        <NewApp/>
    </QueryClientProvider>)
