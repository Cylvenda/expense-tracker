<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import { Button } from "./ui/button/index";
</script>

<template>
    <header class="flex flex-row justify-between p-4">
        <div>
            <h1>My</h1>
            <p class="text-sm bg-accent">Expense Tracker</p>
        </div>

        <div>
            <Button>Dashboard</Button>
            <Button>All Expenses</Button>
            <Button>Payment Processing</Button>
            <Button>Categories</Button>
        </div>

        <div>
            <Button>
                <Plus /> Record Expense
            </Button>
        </div>
    </header>
</template>