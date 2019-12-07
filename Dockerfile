FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["Ryshin.Cdn/Ryshin.Cdn.csproj", "Ryshin.Cdn/"]
RUN dotnet restore "Ryshin.Cdn/Ryshin.Cdn.csproj"
COPY . .
WORKDIR "/src/Ryshin.Cdn"
RUN dotnet build "Ryshin.Cdn.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Ryshin.Cdn.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Ryshin.Cdn.dll"]