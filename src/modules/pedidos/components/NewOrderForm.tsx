/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/src/shared/lib/utils";
import { Button } from "@/src/shared/components/ui/button";
import { Input } from "@/src/shared/components/ui/input";
import { Label } from "@/src/shared/components/ui/label";
import { Textarea } from "@/src/shared/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/shared/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/shared/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/shared/components/ui/dialog";
import { Badge } from "@/src/shared/components/ui/badge";
import {
  CalendarIcon,
  PlusIcon,
  PackageIcon,
  TruckIcon,
  MapPinIcon,
  UserIcon,
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "@/src/shared/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/shared/components/ui/popover";

// --------- SCHEMA DE VALIDAÇÃO ----------
const orderSchema = z.object({
  clienteNome: z.string().min(1, "Nome do cliente é obrigatório"),
  clienteEmail: z.string().email("Email inválido"),
  clienteTelefone: z.string().optional(),
  enderecoOrigem: z.string().min(1, "Endereço de origem é obrigatório"),
  enderecoDestino: z.string().min(1, "Endereço de destino é obrigatório"),
  dataEntrega: z.date().refine((val) => !!val, {
    message: "Data de entrega é obrigatória",
  }),
  prioridade: z
    .enum(["baixa", "media", "alta", "urgente"])
    .refine((val) => !!val, {
      message: "Prioridade é obrigatória",
    }),
  tipoVeiculo: z
    .enum([
      "moto",
      "carro",
      "van",
      "caminhao-pequeno",
      "caminhao-medio",
      "caminhao-grande",
    ])
    .refine((val) => !!val, {
      message: "Tipo de veículo é obrigatório",
    }),
  peso: z.string().optional(),
  dimensoes: z.string().optional(),
  observacoes: z.string().optional(),
  valorFrete: z.string().optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

interface NewOrderFormProps {
  onSubmit: (data: OrderFormData) => void;
  isLoading?: boolean;
  trigger?: React.ReactNode;
}

export default function NewOrderForm({
  onSubmit,
  isLoading = false,
  trigger,
}: NewOrderFormProps) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      clienteNome: "",
      clienteEmail: "",
      clienteTelefone: "",
      enderecoOrigem: "",
      enderecoDestino: "",
      dataEntrega: undefined,
      prioridade: undefined,
      tipoVeiculo: undefined,
      peso: "",
      dimensoes: "",
      observacoes: "",
      valorFrete: "",
    },
  });

  const dataEntrega = watch("dataEntrega");

  const submitForm = (data: OrderFormData) => {
    onSubmit(data);
    reset(); // limpa o formulário
    setIsOpen(false);
  };

  const defaultTrigger = (
    <Button className="gap-2">
      <PlusIcon className="h-4 w-4" />
      Novo Pedido
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger || defaultTrigger}</DialogTrigger>

      <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <PackageIcon className="h-5 w-5" />
            Criar Novo Pedido
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
          {/* Informações do Cliente */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <UserIcon className="h-4 w-4" />
                Informações do Cliente
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clienteNome">Nome do Cliente *</Label>
                <Input
                  id="clienteNome"
                  {...register("clienteNome")}
                  placeholder="Nome completo do cliente"
                  className={cn(errors.clienteNome && "border-red-500")}
                />
                {errors.clienteNome && (
                  <p className="text-sm text-red-500">
                    {errors.clienteNome.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="clienteEmail">Email *</Label>
                <Input
                  id="clienteEmail"
                  type="email"
                  {...register("clienteEmail")}
                  placeholder="email@exemplo.com"
                  className={cn(errors.clienteEmail && "border-red-500")}
                />
                {errors.clienteEmail && (
                  <p className="text-sm text-red-500">
                    {errors.clienteEmail.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="clienteTelefone">Telefone</Label>
                <Input
                  id="clienteTelefone"
                  {...register("clienteTelefone")}
                  placeholder="(11) 99999-9999"
                />
              </div>
            </CardContent>
          </Card>

          {/* Informações de Entrega */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MapPinIcon className="h-4 w-4" />
                Informações de Entrega
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="enderecoOrigem">Endereço de Origem *</Label>
                  <Textarea
                    id="enderecoOrigem"
                    {...register("enderecoOrigem")}
                    placeholder="Rua, número, bairro, cidade, CEP"
                    className={cn(errors.enderecoOrigem && "border-red-500")}
                    rows={3}
                  />
                  {errors.enderecoOrigem && (
                    <p className="text-sm text-red-500">
                      {errors.enderecoOrigem.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="enderecoDestino">Endereço de Destino *</Label>
                  <Textarea
                    id="enderecoDestino"
                    {...register("enderecoDestino")}
                    placeholder="Rua, número, bairro, cidade, CEP"
                    className={cn(errors.enderecoDestino && "border-red-500")}
                    rows={3}
                  />
                  {errors.enderecoDestino && (
                    <p className="text-sm text-red-500">
                      {errors.enderecoDestino.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Data de Entrega *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !dataEntrega && "text-muted-foreground",
                          errors.dataEntrega && "border-red-500"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dataEntrega
                          ? format(dataEntrega, "PPP", { locale: ptBR })
                          : "Selecionar data"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={dataEntrega}
                        onSelect={(date) => setValue("dataEntrega", date!)}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.dataEntrega && (
                    <p className="text-sm text-red-500">
                      {errors.dataEntrega.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Prioridade *</Label>
                  <Select
                    onValueChange={(val) => setValue("prioridade", val as any)}
                    defaultValue={watch("prioridade")}
                  >
                    <SelectTrigger
                      className={cn(errors.prioridade && "border-red-500")}
                    >
                      <SelectValue placeholder="Selecionar prioridade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="baixa">
                        <Badge variant="secondary">Baixa</Badge>
                      </SelectItem>
                      <SelectItem value="media">
                        <Badge variant="outline">Média</Badge>
                      </SelectItem>
                      <SelectItem value="alta">
                        <Badge variant="destructive">Alta</Badge>
                      </SelectItem>
                      <SelectItem value="urgente">
                        <Badge className="bg-orange-500">Urgente</Badge>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.prioridade && (
                    <p className="text-sm text-red-500">
                      {errors.prioridade.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Valor do Frete</Label>
                  <Input {...register("valorFrete")} placeholder="R$ 0,00" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Informações do Veículo e Carga */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TruckIcon className="h-4 w-4" />
                Veículo e Carga
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Tipo de Veículo *</Label>
                <Select
                  onValueChange={(val) => setValue("tipoVeiculo", val as any)}
                  defaultValue={watch("tipoVeiculo")}
                >
                  <SelectTrigger
                    className={cn(errors.tipoVeiculo && "border-red-500")}
                  >
                    <SelectValue placeholder="Selecionar veículo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="moto">Moto</SelectItem>
                    <SelectItem value="carro">Carro</SelectItem>
                    <SelectItem value="van">Van</SelectItem>
                    <SelectItem value="caminhao-pequeno">
                      Caminhão Pequeno
                    </SelectItem>
                    <SelectItem value="caminhao-medio">
                      Caminhão Médio
                    </SelectItem>
                    <SelectItem value="caminhao-grande">
                      Caminhão Grande
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.tipoVeiculo && (
                  <p className="text-sm text-red-500">
                    {errors.tipoVeiculo.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Peso (kg)</Label>
                <Input
                  {...register("peso")}
                  placeholder="Ex: 50"
                  type="number"
                />
              </div>

              <div className="space-y-2">
                <Label>Dimensões</Label>
                <Input
                  {...register("dimensoes")}
                  placeholder="Ex: 100x50x30 cm"
                />
              </div>

              <div className="space-y-2 md:col-span-3">
                <Label>Observações</Label>
                <Textarea
                  {...register("observacoes")}
                  placeholder="Informações adicionais sobre o pedido..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Botões de Ação */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              disabled={isLoading}
              className="text-black"
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Criando..." : "Criar Pedido"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
