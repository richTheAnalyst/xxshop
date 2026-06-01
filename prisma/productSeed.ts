import { PrismaClient } from '@prisma/client'



export default async function prodSeed(prisma: PrismaClient) {
    await prisma.product.createMany({
        data:[
            {
                title: "Golden chafing",
                description: "Neat and nice rectangular golden chafing",
                price: 200.99,
                image: "https://imgs.search.brave.com/ll-dN48aKGlYZiSS6GNPh_J6bIIkdSsqb-NwLrY8hWY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vR0FS/VkVFLVJvbGwtVG9w/LUNoYWZpbmctRGlz/aC1CdWZmZXQtU2V0/LTktUVQtUmVjdGFu/Z3VsYXItQ2F0ZXJp/bmctRm9vZC1XYXJt/ZXItR29sZGVuX2Y5/YjQ3NzE3LTQyNWEt/NDkxNS1hMmMyLTE0/YmRmMmViMzI5Ny4z/ZjhiOGFjYTNiNTc2/ZWE3ZjMxZGZlZDk3/ODZkOWEzMi5qcGVn/P29kbkhlaWdodD01/NzMmb2RuV2lkdGg9/NTczJm9kbkJnPUZG/RkZGRg",
                category: "Chafing Dish",
            },
            {
                title: "Golden chafing",
                description: "Elegant neat and nice round golden chafing",
                price: 179.99,
                image: "https://imgs.search.brave.com/e6S-MJTW2d2u1mX0F-rVN4r76TkifN7Nz3jTGt3-0vA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cm92c3VuLmNvbS9j/ZG4vc2hvcC9maWxl/cy9pbWFnZV80XzJj/NGFlZTEwLTljNmIt/NDRiZC1iNjAwLTBm/NWQ4M2EwZDdlYS5q/cGc_dj0xNzA0Nzcy/ODI5JndpZHRoPTE2/MDA",
                category: "Chafing Dish",
            },
            {
                title: "Gold and Silver chafing",
                description: "Gold and silver flat rectangular chafing ",
                price:  99.99,
                image: "https://imgs.search.brave.com/YHMFqyP3F4ZtGSqIFfaDJt_VIkNBW3qkx_zcnStAuGA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODEyQTlqOTI1REwu/anBn",
                category: "Chafing Dish",
            },
            {
                title: "Gold and Silver chafing",
                description: "Gold and silver big rectangular chafing ",
                price:  199.99,
                image: "https://imgs.search.brave.com/qRfDyuZf6-XPoDa0SkVWy05rHCkm4y_2xggVVLCgl3s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cm92c3VuLmNvbS9j/ZG4vc2hvcC9maWxl/cy9pbWFnZV82XzFj/MmUxYjNmLTY1Zjkt/NDQ2My04MDk1LWQ4/ZWNlZDBkZWMxOS5q/cGc_dj0xNzA4NDAx/NDAzJndpZHRoPTE2/MDA",
                category: "Chafing Dish",
            },
            {
                title: "Gold and Silver chafing",
                description: "Gold and silver big round chafing ",
                price:  199.99,
                image: "https://imgs.search.brave.com/KaWaJkMiPhHHuQExO86-1UFslgEG6uwqBJ4wgM2Zz58/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vUk9W/U1VOLVJvbGwtVG9w/LUNoYWZpbmctRGlz/aC1CdWZmZXQtU2V0/LUdvbGQtQWNjZW50/LTYtUXVhcnQtUm91/bmQtU3RhaW5sZXNz/LVN0ZWVsLUNoYWZl/ci1CdWZmZXQtU2Vy/dmVycy1XYXJtZXJz/LVNldC1XYXJtaW5n/LVRyYXktR2xhc3Mt/V2luZG93LVdlZGRp/bmdfMTllYmJlNzUt/YjcyOS00MGMwLWIz/NjgtOTIzNDc4NTM1/MmIxLjkyYjYzNGJh/YmJmODVmYzY4MDUz/NGMwZTQwYmQ5MjM1/LmpwZWc_b2RuSGVp/Z2h0PTU3NiZvZG5X/aWR0aD01NzYmb2Ru/Qmc9RkZGRkZG",
                category: "Chafing Dish",
            },
            {
                title: "Gold and Silver chafing",
                description: "Gold and silver small round-like chafing ",
                price:  199.99,
                image: "https://imgs.search.brave.com/Ii35XYy5dkH0WJeRyAiwQh0Cnn-8HJn0jICaZUqRA5M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cm92c3VuLmNvbS9j/ZG4vc2hvcC9maWxl/cy9pbWFnZV8xX2M5/N2E3N2FhLTA5NjAt/NDVmNC05NWQzLWVi/ZjQ3ZTM4OTQxZC5q/cGc_dj0xNzI4NjE3/OTQxJndpZHRoPTE2/MDA",
                category: "Chafing Dish",

            },
            {
                title: "Gold and Silver chafing",
                description: "Gold and silver small round-like chafing ",
                price:  199.99,
                image: "https://imgs.search.brave.com/N6-Um-11QwJQyFbTASu_WhO2mD5B6kJ32ZztnbpXMdM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMud2ZjZG4uY29t/L2ltLzcyNjYyMjgx/L3Jlc2l6ZS1oNDAw/LXc0MDBeY29tcHIt/cjg1LzMzNDIvMzM0/MjMyNjE2LzUrUXQr/Um91bmQrQ2hhZmlu/ZytEaXNoK0J1ZmZl/dCtTZXQrRnVsbC1T/aXplK1BhbitTdGFp/bmxlc3MrU3RlZWwr/R29sZC5qcGc",
                category: "Chafing Dish",
            },
            {
                title: "Silver chafing",
                description: "Elegant neat and nice rectangular silver chafing",
                price: 169.99,
                image: "https://imgs.search.brave.com/WoWcPUxhtb-NozcibKRxAvB-DGmd8EjfqOjCq2YtfN8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTF5VnR5bGs1WUwu/anBn",
                category: "Chafing Dish",
                
            },
            {
                title: "Silver chafing",
                description: "Elegant neat and nice rectangular silver chafing",
                price: 169.99,
                image: "https://imgs.search.brave.com/4cXnfL624KkUK0siYphtK_I1BPcJRRYdzZKv7jfvva4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5tYWRlLWluLWNo/aW5hLmNvbS8yMDNm/MGowMGRURGtxZmhS/SUdncC9Hb2xkLW9y/LVNpbHZlci1TdGFp/bmxlc3MtU3RlZWwt/QnVmZmV0LVN0b3Zl/LVJlY3Rhbmd1bGFy/LUNoYWZpbmctRGlz/aC53ZWJw",
                category: "Chafing Dish",
            },
            {
                title: "Silver chafing",
                description: "Elegant neat and nice round silver chafing",
                price: 169.99,
                image: "https://imgs.search.brave.com/ei1JI-iERSoAn49-b1on6rggqTaQu3FIg8Uca3LBB1I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z3JhbmRhZmZhaXJz/YXRsYW50YS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MTEvNi1RdWFydC1T/dGFpbmxlc3MtU3Rl/ZWwtUm91bmQtUm9s/bC1Ub3AtQ2hhZmlu/Zy1CdWZmZXQtU2ls/dmVyLTMwMHgzMDAu/anBn",
                category: "Chafing Dish",
            }



        ]
    })
}
