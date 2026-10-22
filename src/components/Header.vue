<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import { Button } from "./ui/button/index";
</script>

<template>
    <header class="flex flex-row justify-between items-center p-4 shadow ">
        <div class="flex  items-center gap-2">
            <span>
                <img src="/images/icons-expense.png" alt="Profile picture" class="cover h-12 w-12" />
            </span>

            <span class="flex flex-col justify-center">
                <h1 class="font-semibold">My</h1>
                <p class="text-sm ">Expense Tracker</p>
            </span>
        </div>

        <div class="flex gap-1">
            <Button size="xs" variant="outline" class="border-none bg-primary">Dashboard</Button>
            <Button size="xs" variant="outline" class="border-none">All Expenses</Button>
            <Button size="xs" variant="outline" class="border-none">Payment Processing</Button>
            <Button size="xs" variant="outline" class="border-none">Categories</Button>
        </div>

        <div>
            <Button size="sm" class="">
                <Plus /> Record Expense
            </Button>
        </div>
    </header>
</template>